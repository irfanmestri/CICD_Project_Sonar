pipeline{
    agent any

    stages{
        stage("Git Checkout"){
           steps{
                git branch: 'main', changelog: false, poll: false, url: 'https://github.com/irfanmestri/CICD_Project_Sonar.git'
           }
        }
        stage("Docker Build"){
            steps{
                sh'docker build -t shopping_web .'
            }
        }
        stage("Docker Run"){
            steps{
                sh'docker run -d -p 2000:80 shopping_web'
            }
        }
    }
}