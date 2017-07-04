import {ajax} from '../'
import MockAdapter from 'axios-mock-adapter'

var mock = new MockAdapter(ajax)

mock.onPost('/Login').reply(200, {
  Success: true
})

