const { test, expect } = require('@playwright/test');

test('GET user by ID', async ({ request }) => {
    const response = await request.get('https://dummyjson.com/users/1');
    
    expect(response.status()).toBe(200);
    
    const body = await response.json();
    expect(body.id).toBe(1);
    expect(body.email).toContain('@');
});