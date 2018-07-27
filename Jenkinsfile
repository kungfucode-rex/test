pipeline {
  agent any
  stages {
    stage('Build') {
      agent {
        docker {
          image 'node:10.6-alpine'
          args '-p 3000:3000'
        }

      }
      steps {
        sh '''rm -rf /var/www/html/**
cd dist/
echo $PWD'''
        sh 'mv dist/** /var/www/html/'
      }
    }
  }
}