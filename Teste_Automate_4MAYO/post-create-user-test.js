const {spec,request}=require("pactum");
import { faker } from '@faker-js/faker';

describe('Create user test suite', ()=>{
    it('create user', async()=>{
        const requestBody={
            
            
                "name": "morpheus",
                "job": "leader"
            
        }
        await spec().post('https://reqres.in/api/users')
        .withBody(requestBody)
        .withHeaders('Content-Type','application/json')
        .expectStatus(201)
    });
});