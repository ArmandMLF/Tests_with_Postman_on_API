const {spec,request}=require("pactum");

describe('Create user test suite', ()=>{
    it('create user', async()=>{
        const requestBody={
            
                "username": "Armandddd",
                "first_name": "John",
                "last_name": "Mitrica",
                "email": "dajrgjagg@yahoo.com",
                "password": "7474747474"
            
        }
        await spec().post('https://test-api.k6.io/user/register/')
        .withBody(requestBody)
        .withHeaders('Content-Type','application/json')
        .expectStatus(201)
    });
});

