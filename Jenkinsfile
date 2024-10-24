pipeline{
    agent any
    environment{
    SONAR_HOME = tool "sonar"
    }


    stages{
        stage("Git Checkout"){
           steps{
                git branch: 'main', changelog: false, poll: false, url: 'https://github.com/irfanmestri/CICD_Project_Sonar.git'
           }
        }
        stage("SonarQube Analysis"){
            steps{
               withSonarQubeEnv("Sonar"){
                   sh "$SONAR_HOME/bin/sonar-scanner -Dsonar.projectName=shopping_web -Dsonar.projectKey=shopping_web -X"
               }
            }
        }
        stage("SonarQube Quality Gates"){
            steps{
               timeout(time: 1, unit: "MINUTES"){
                   waitForQualityGate abortPipeline: false
               }
            }
        }
        stage("OWASP"){
            steps{
                dependencyCheck additionalArguments: '--scan ./', odcInstallation: 'DC'
                dependencyCheckPublisher pattern: '**/dependency-check-report.xml'
            }
        }
        stage("Docker Build"){
            steps{
                sh'docker build -t shopping_web .'
            }
        }
        stage("Trivy"){
            steps{
                sh "trivy image shopping_web"
            }
        }
        stage("Docker Run"){
            steps{
                sh'docker run -d -p 10000:80 shopping_web'
            }
        }
    }
}