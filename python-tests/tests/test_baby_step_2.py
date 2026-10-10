from playwright.sync_api import APIRequestContext

def test_baby_step_2_simple_post(playwright):
    # 1. Initialize API request context
    api_context: APIRequestContext = playwright.request.new_context()

    # 2. Define payload dictionary
    new_post = {
        "title": "My First Playwright API Post",
        "body": "Learning step-by-step calmly",
        "userId": 101,
    }

    # 3. Send POST request
    response = api_context.post(
        "https://jsonplaceholder.typicode.com/posts",
        data=new_post,
        headers={"Content-Type": "application/json"}
    )

    # 4. Assert status code is 201 Created
    assert response.status == 201

    # 5. Parse JSON and verify title
    response_body = response.json()
    print("\nCreated Post Response (Python):", response_body)

    assert response_body["title"] == new_post["title"]