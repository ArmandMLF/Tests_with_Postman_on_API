const {spec,request}=require("pactum");
import { faker } from '@faker-js/faker';

describe('Put user test suite', ()=>{
    it('Update with put user test', async()=>{
        const requestBody={
            
            
            "name": "morpheus",
            "job": "zion resident"
            
        }
        await spec().put('https://reqres.in/api/users/2')
        .withBody(requestBody)
        .withHeaders('Content-Type','application/json')
        .expectStatus(200)
    });
});

