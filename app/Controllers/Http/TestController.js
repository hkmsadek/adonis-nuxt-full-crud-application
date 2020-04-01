'use strict'

const Tasklist = use('App/Models/Tasklist')
class TestController {

    async testMethod({request, response}){
        return 'some simple text'
    }
    async testMethodWithData({request, response, params}){
        return params.id
    }
    async addTask({request, response}){
        // validation... 
        return Tasklist.create({
            taskName : request.all().taskName
        })
    }
    async getTask(){
        return Tasklist.all()
    }
    async getSingleTask({params}){
        return Tasklist.query().where('id', params.id).first()
    }
    async updateTask({request}){
        //
        const id =  request.all().id
        return Tasklist.query().where('id', id).update({
            taskName : request.all().taskName
        })
    }
    async deleteTask({request}){
        const id =  request.all().id
        // if logged in 
        // if you are the owner of the record... 
        return Tasklist.query().where('id', id).delete()
    }


}

module.exports = TestController
