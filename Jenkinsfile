pipeline{
    agent any

    stages{
        stage("Git Checkout"){
           steps{
                git branch= 'main' , url: https://github.com/irfanmestri/CICD_Project_Sonar.git
           }
        }
        stage("Docker Build"){
            steps{
                sh'docker build -t shoppin_web'
            }
        }
        stage("Docker Run"){
            steps{
                sh'docker run -d -p 8000:8000 shopping_web'
            }
        }
    }
}