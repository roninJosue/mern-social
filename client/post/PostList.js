import React from 'react'
import PropTypes from 'prop-types'

export default function PostList (props) {
    return (
        <div style={{marginTop: '24px'}}>
            {
                props.posts.map((item, i)=>{
                    return <Post post={item} key={i} onRemove={props.removeUpdate}/>
                })
            }
        </div>
    )
}

PostList.propTypes = {
    posts: PropTypes.isRequired,
    removeUpdate: PropTypes.func.isRequired
}