pipeline {
	agent none
	stages {
		stage('Build') {
			agent {
				docker {
					image 'node:10.6-alpine' 
					args '-p 3000:3000' 
				}
			}
			steps {
                sh 'npm install' 
				sh 'npm run build'
            }
		}
		stage('Deploy') {
			agent any
			steps {
				sh 'mv dist /var/www/html'
            }
		}
	}
}
