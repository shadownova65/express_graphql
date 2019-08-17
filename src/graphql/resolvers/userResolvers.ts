import User from '../../models/user';
import {IUser} from '../../interfaces';

const signup = ({name}: {name: string}) => {
  User.findOne({
    name
  }, (err, user) => {
    if (!user) {
      User.create({
        name
      }, (err: any, user: any) => {
        console.log('created user: ', user);
        return user;
      })
    } else {
      console.log('find user: ', user);
      return user;
    }

    if (err) {
      console.log('Error: ', err);
    }
  })
}

interface IDBUser extends IUser {
  _id: string
}
const getUser = ({name}: {name: string}) => {
  console.log('try to find user: ', name);
  User.findOne({name}, (err: any, user: any) => {
    if (user) {
      console.log('get user back from DB: ', user);
      let result = {
        name: user.name,
        _id: user._id
      }
      console.log('return: ', result);
      return result;
    } else {
      console.log('Error in finding user: ', err);
    }
  })
}

export default {
  createUser: signup,
  user: getUser
}