import PropTypes from 'prop-types';
export class Post {
  constructor(option) {
    console.log('arguments',arguments)
    if (arguments.length!==0) {
      this.id = option.Post_ID;
      this.author = option.Author;
      this.date = new Date(option.Create_Date);
      this.content = option.Content;
      this.status = option.Status;
    }
  }

}
Post.PropTypes={
  id:PropTypes.string.isRequired,
  author:PropTypes.string.isRequired,
  date:PropTypes.instanceOf(Date).isRequired,
  content:PropTypes.string.isRequired,
  status:PropTypes.number.isRequired,
}