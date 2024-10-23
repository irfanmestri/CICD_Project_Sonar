pipeline {
    agent any

    stages {
        stage('git checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/irfanmestri/CICD_Project_Sonar.git'
            }
        }
        stage('Build&Test') {
            steps {
               sh 'docker build -t node_cicd .'
                echo 'Build is completed'
            }
        }
        stage('run') {
            steps {
                sh 'docker run -d -p 8070:8070 node_cicd'
                echo 'Application is running successfully'
            }
        }
    }
}
