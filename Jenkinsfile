pipeline {
    agent any

    tools {
        nodejs 'node' 
    }

    environment {
        CI = 'true'
    }

    stages {
        stage('Checkout') {
            steps {
                 checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing Project Dependencies...'
                 sh 'npm ci'
                
                echo 'Installing Playwright Browsers...'
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Run Performance Tests') {
            steps {
                echo 'Executing Parabank Performance Suite...'
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                    sh 'npx playwright test --grep @performance'
                }
            }
        }

        stage('Run E2E Tests') {
            steps {
                echo 'Executing Parabank E2E Flow Suite...'
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                 sh 'npx playwright test --grep @e2e'
                }
            }
        }
    }

    post {
        always {
            echo 'Archiving Playwright Test Reports...'
            publishHTML(target: [
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report'
            ])
            
            archiveArtifacts artifacts: 'test-results/**', allowEmptyArchive: true
        }
    }
}