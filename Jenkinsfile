pipeline {
    agent any

    stages {

        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }

        stage('Check Environment') {
            steps {
                sh '''
                    node -v || true
                    npm -v || true
                    docker --version || true
                    docker compose version || true
                '''
            }
        }

        stage('Install Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm run build'
                }
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    docker compose down || true
                    docker compose build --no-cache
                    docker compose up -d
                '''
            }
        }

        stage('Check Containers') {
            steps {
                sh 'docker ps'
            }
        }
    }

    post {
        success {
            echo '배포 완료'
        }
        failure {
            echo '배포 실패'
            sh 'docker ps -a || true'
        }
    }
}