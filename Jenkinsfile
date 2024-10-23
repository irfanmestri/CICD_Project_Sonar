pipeline {
    agent any

    stages {
        stage('git checkout') {
            steps {
                git changelog: false, poll: false, url: 'https://github.com/irfanmestri/CICD_Project_Sonar.git'
            }
        }
        stage('Build&Test') {
            steps {
               sh 'docker build -t shopping_cart .'
                echo 'Build is completed'
            }
        }
        stage('run') {
            steps {
                sh 'docker run -d -p 8000:8000 shopping_cart'
                echo 'Application is running successfully'
            }
        }
    }
}
