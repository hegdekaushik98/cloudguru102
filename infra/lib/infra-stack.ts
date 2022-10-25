import {Stack, StackProps, aws_s3 as s3, aws_lambda_nodejs} from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as path from 'path';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class InfraStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
  
  const bucket = new s3.Bucket(this,'SampleBucket',{
    encryption: s3.BucketEncryption.S3_MANAGED
  })
  
  
  }
}
