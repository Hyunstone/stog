import React from 'react'

export const BlogGallery: React.FC<BlogGalleryProps> = ({ postList }) => {
	if (!postList || postList.length === 0) {
		return <p>No posts available. Please check back later.</p>
	}

	return (
		<div className="blog-gallery">
			{postList.map((post) => (
				<div key={post.id} className="blog-card">
					<h2>{post.title}</h2>
					<p>{post.summary}</p>
					<div>
						<span>By {post.author}</span>
						<span>{new Date(post.date).toLocaleDateString()}</span>
					</div>
				</div>
			))}
		</div>
	)
}

interface Post {
	id: string
	title: string
	summary: string
	date: string
	author: string
}

interface BlogGalleryProps {
	postList: Post[]
}
