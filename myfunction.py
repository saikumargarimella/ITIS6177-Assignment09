def lambda_handler(event, context):
    # TODO implement
    # reading the parameter
    awstest = event['queryStringParameters']['keyword']
    awstest1= 'Sai Kumar says ' + awstest
    return {
        'statusCode': 200,
        'body': awstest1
    }