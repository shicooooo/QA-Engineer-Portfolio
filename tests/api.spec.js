const { test, expect } = require('@playwright/test');

test('GET user by ID', async ({ request }) => {
    const response = await request.get('https://dummyjson.com/users/1');
    
    expect(response.status()).toBe(200);
    
    const body = await response.json();
    expect(body.id).toBe(1);
    expect(body.email).toContain('@');
});

test("Post create new user", async ({ request }) => {
    const response= await request.post('https://dummyjson.com/users/add', {
        data:{
            firstName: "sherif",
            lastname:'salama',
            email:'sherif@test.com',
        }
    });
    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body.firstName).toBe("sherif");
    expect(body.email).toContain('sherif@test.com');
});