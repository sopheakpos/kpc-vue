import { Meteor } from 'meteor/meteor';
import { Customer } from '../collections/Customer';

Meteor.methods({
    'customer.insert'(doc){
        return Customer.insert(doc)
    },
    'customer.find'(){
        return Customer.find().fetch()
    },
    'customer.remove'(id){
        return Customer.remove({_id:id})
    },
    // 'category.update'(doc){
    //     return Category.update({_id:doc._id})
    // }
})