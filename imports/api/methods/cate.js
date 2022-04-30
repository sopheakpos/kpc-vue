import { Meteor } from 'meteor/meteor';
import { Category } from '../collections/Cate';

Meteor.methods({
    'category.insert'(doc){
        return Category.insert(doc)
    },
    'category.find'(){
        return Category.find().fetch()
    },
    'category.remove'(id){
        return Category.remove({_id:id})
    },
    // 'category.update'(doc){
    //     return Category.update({_id:doc._id})
    // }
})