import * as C from '../actions/postAction'

const initState={
  isProcessing:false,
  isFinished:false,
  status:false,
  errorMessage:"",
  post:{},
  posts:[],
}

const PostReducer =  function (state=initState,action) {
  let posts = state.posts
  switch (action.type) {
    case C.CREATE_POST_START:
      
      state = {
        ...state,
        isProcessing:true,
        post:{},
      }
      break;
    case C.CREATE_POST_SUCCED:
      // console.log("state",state)
      
      state ={
        ...state,
        isProcessing:false,
        status:true,
        // post:action.payload,
        posts: posts.push(action.payload)
      }
      break;
    case C.CREATE_POST_FAILED:
      state={
        ...state,
        isProcessing:false,
        status:false,
        errorMessage:action.payload,
      }
      break;   
    case C.FETCH_POSTLIST_START:
      state={
        ...state,
        post:{},
        isProcessing:true,
      }
      break;
    case C.FETCH_POSTLIST_SUCCED:
      state={
        ...state,
        isProcessing:false,
        posts: action.payload,
        status:true,
      }
      break;
    case C.FETCH_POSTLIST_FAILED:
      state={
        ...state,
        isProcessing:false,
        status:false,
        errorMessage:action.payload
      }
      break;

    case C.FETCH_POST_START:
      state={
        ...state,
        post:{},
        isProcessing:true,
        status:false
      }
      break;
    case C.FETCH_POST_SUCCED:
      
    
      state={
        ...state,
        isProcessing:false,
        status:true,
        post:action.payload,
      }
      break;  
    case C.FETCH_POST_FAILED:
      state={
        ...state,
        isProcessing:false,
        status:false,
        errorMessage:action.payload
      }
    case C.UPDATE_POST_START:
      state={
        ...state,
        isProcessing:true,
        isFinished:false,
        status:false,
        errorMessage:"",
        post:action.payload
      }
      break;

    case C.UPDATE_POST_SUCCED:
      
      let post = state.post
      console.log('in update',post)
      posts[post.Post_ID-1] = post
      state={
        ...state,
        isProcessing:false,
        status:true,
        errorMessage:"",
        isFinished:true,
        post:post,
        posts:posts
      }
      break;
    
    case C.UPDATE_POST_FAILED:
      state={
        ...state,
        isProcessing:false,
        status:false,
        isFinished:true,
        errorMessage:action.payload
      }
      break;

    case C.VIEW_POST_DETAIL:
    
      state={
        ...state,
        isProcessing:false,
        status:true,
        post: action.payload,
      }
    default:
      break;
  }
  return state;
}



export default PostReducer;