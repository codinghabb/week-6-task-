import { readFile, readFileSync } from "fs";
import isEmail from 'validator/lib/isEmail';

/**
 * First task - Read the csv files in the inputPath and analyse them
 *
 * @param {string[]} inputPaths An array of csv files to read
 * @param {string} outputPath The path to output the analysis
 */
let emails: string[]=[];
let validEmails: string[] = []
function analyseFiles(inputPaths: string[], outputPath: string) {
    for (const file of inputPaths) {
        
      
        const data = readFileSync( file , 'utf-8')
        emails = data.trim().split('\n').slice(1)
        
       
       
        console.log(emails)
      // let emails= file.push()
    } 
    for (const email of emails) {
      if(isEmail(email)){
     validEmails.push(email)
      }
      
    }
 console.log(validEmails)
 
  // console.log('Complete the implementation in src/analysis.ts');
}
// console.log(analyseFiles('/Users/apple/Desktop/week-6-task/task-two/fixtures/inputs/small-sample.csv', 'myoutput.json'))
 export default analyseFiles;

