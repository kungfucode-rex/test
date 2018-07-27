pipeline {
    agent {
        docker {
            image 'node:10.6-alpine' 
            args '-p 3000:3000' 
        }
    }
    environment {
		CI = 'true'
    }
    stages {
        stage('Install') { 
            steps {
                sh 'npm install' 
            }
        }
		stage('Build') {
			steps {
				sh 'npm run build'
			}
		}
		stage('Deploy') {
			steps {
				sh 'mv dist /var/www/html'
			}
		}
    }
}
