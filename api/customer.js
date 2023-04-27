//라우터 모듈화
const router = require('express').Router();
const customerController = require('./_controller/customerController');

//CRUD함수
/*
GET	/customers	모든 Customers 조회 list

POST	/customers	Customers 생성 creat

PUT	/customers/:id	id로 Customers 수정 update
DELETE	/customers/:id	id로 Customers 삭제 delete

POST /customers	모든 Customer 삭제 truncate

POST /customers/dummy 
*/

//crete
router.post("/", async (req, res) => {
    console.log('create customer');
    const result = await customerController.create(req);
    res.json(result);
    console.log(result);

});

//list
router.get('/', async(req,res)=>{
    console.log('list customer');
    const result = await customerController.list(req);
    res.json(result);
});

//update
router.put('/:id', async(req,res)=>{
    console.log('update customer');
    const result = await customerController.update(req);
    res.json(result);
});

//delete
router.delete('/:id', async(req,res)=>{
    console.log('delete customer');
    const result = await customerController.delete(req);
    res.json(result);
})

//truncate
router.post('/reset',async(req,res)=>{
    console.log('reset customer');
    const result = await customerController.reset(req);
    res.json(result);
})

//dummy
router.post('/dummy',async(req,res)=>{
    console.log('dummy customer');
    const result = await customerController.dummy(req);
    res.json(result);
})

module.exports = router;
