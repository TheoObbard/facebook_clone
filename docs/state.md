## My State
```js
{
entities: {
  users: {
    3: {
      id: 3,
      name: 'Theo',
      email: 'theobbard@gmail.com',
      birthday: '01/29/1995',
      gender: 'Male',
      profilePhoto: 'path/theos_awesome_pic',
      coverPhoto: 'path/basic_bay_bridge_pic'
    }
  },
  friendRequests: {
    14: {
      id: 14, 
      requesteeId: 3, 
      requesterId: 6
    }
    9: {
      id: 9, 
      requesteeId: 8, 
      requesterId: 3
    }
  },
  friendships: {
    5: {
      id: 5, 
      userOneId: 3, 
      userTwoId: 8
    }
    48: {
      id: 48, 
      userOneId: 2, 
      userTwoId: 3
    }
  },
  posts: {
    1: {
      id: 1,
      body: 'bored on sunday',
      posterId: 3,
      posteeId: 3
    },
    2: {
      id: 2,
      body: 'is eating cereal',
      posterId: 3,
      posteeId: 7
    }
  },
  postLikes: {
  	1: {
      id: 1,
      userId: 5,
      postId: 2
    }
  }
}
}
```
