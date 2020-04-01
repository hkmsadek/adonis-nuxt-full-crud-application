'use strict'

const Schema = use('Schema')

class TasklistSchema extends Schema {
  up () {
    this.create('tasklists', (table) => {
      table.increments()
      table.string('taskName')
      table.bool('isDone').default(0)
      table.timestamps()
    })
  }

  down () {
    this.drop('tasklists')
  }
}

module.exports = TasklistSchema
