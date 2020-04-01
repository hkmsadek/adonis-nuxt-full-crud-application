<template>
   <div>
        <div class="containerbox">
              <h1>Home page</h1>
            
              <table>
                  <tr>
                        <th>ID</th>
                        <th>Task</th>
                        <th>Action</th>
                  </tr>
                  <tr v-for="(task, i) in taskLists" :key="i">
                        <td>{{task.id}}</td>
                        <td>
                              <span v-if="!task.isEdit">{{task.taskName}}</span>
                              <span v-if="task.isEdit"><Input type="text" placeholder="task name" v-model="task.taskName" @on-enter="saveTask(task)"/> </span>
                        </td>
                        <td>
                              <Button type="info" size="small" @click="showEditInput(task)">Edit</Button> 
                              &nbsp;<Button size="small" type="error" @click="deleteTask(task, i)" :disabled="isLoading" :loading="isLoading">{{isLoading ? 'Deleting...' : 'Delete'}}</Button>
                        </td>
                  </tr>
                  
  
            </table>

              
        </div>
       
   </div>
   
</template>


<script>
export default {
     data(){
           return {
                 isLoading : false, 
           }
     },

     async asyncData({app}) {
        try {
            const data = await app.$axios.$get('app/get_task_lists')
            return {
                  taskLists : data,
            }


        } catch (error) {}
         

          
     },
     methods : {
            showEditInput(task){
                 this.$set(task, 'isEdit', true )
            }, 
            async saveTask(task){
                  task.isEdit = false
                  const res = await this.callApi('post', 'app/upadate_task', {id: task.id, taskName: task.taskName})
                  if(res.status==200){
                        this.s('Task has been updated successfully!')
                  }else{
                        this.swr()
                  }
            }, 
            async deleteTask(task, index){
                  if(!confirm('Are you sure you want to delete this task?')) return 
                  this.isLoading = true
                  const res = await this.callApi('post', 'app/delete_task', {id: task.id})
                   if(res.status==200){
                        this.taskLists.splice(index, 1)
                        this.s('Task has been deleted successfully!')

                  }else{
                        this.swr()
                  }
                  this.isLoading = false
            }
     }

     


}
</script>


<style>
.containerbox{
      text-align: center;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  margin: 0 auto;
  width: 800px;
 
}

td, th {
  
  text-align: left;
  padding: 8px;
  border: 1px solid #c39c9c;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>