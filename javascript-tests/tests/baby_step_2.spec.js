const {test, expect, request } = require('@playwright/test');

test('Baby Step 2: Simple POST Request', async () => {

    //1. initialize API Request context
    const apiContext = await request.newContext();

    //2. Define Payload
    const newPost = {
        title: 'My First Playwright API Post',
        body: 'Learning step-by-step calmly',
        userId: 101,
    };  

    //3. Send POST Request
    const response = await apiContext.post('https://jsonplaceholder.typicode.com/posts', {
        data: newPost,
        headers: {
            'Content-Type': 'application/json'},
    });

    //4. Assert the status code 201 created
    expect(response.status()).toBe(201);

    //5. Assert the response body and verify the returned data
    const responseBody = await response.json();
    console.log('Created Post Response (JS):', responseBody);

    expect(responseBody.title).toBe(newPost.title);
});