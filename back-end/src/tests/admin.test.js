// const chai = require ('chai');
// const { stub } = require ('sinon');
// const chaiHttp = require ('chai-http');
// const { User } = require ('../database/models');
// const {adminMock, sellerMock} = require('./mocks');

// chai.use(chaiHttp);

// const { expect } = chai;
// const app = require ('../api/app');

// describe('Rota Admin', () => {

//     before(() => {
//         stub(User, 'findOne')
//         .onCall(0).resolves(sellerMock)
//         .onCall(1).resolves(adminMock);
//         stub(User, 'findAll').resolves(usersMock);
//     });

//     after(() =>{
//         User.findOne.restore();
//         User.findAll.restore();
//     });

//     describe('Quando o token não é passado', () => {
//         let response;

//         before( async () => {
//             response = await chai.request(app).get('/admin');
//         });

//         it('Deveria retornar status 401', () => {
//             expect(response).to.have.status(401);
//         });

//         // it('Deveria retornar a mensagem "token not found"', () => {
//         //     expect(response.body.message).to.be.equal('token not found');
//     });
// });
// // });
