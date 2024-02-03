import React from 'react';
import Pagination from '../../components/posts/Pagination';
import { useSelector, shallowEqual } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';

const PaginationContainer = () => {
  const [searchParams] = useSearchParams();

  const params = useParams();
  const username = params?.username?.split('@')[1]; // username이 정의되어 있을 때만 split 메서드 호출
  
  const tag = searchParams.get('tag');
  // page가 없으면 1을 기본값으로 사용
  const page = parseInt(searchParams.get('page'), 10) || 1;

  const { lastPage, posts, loading } = useSelector(
    ({ posts, loading }) => ({
      lastPage: posts.lastPage,
      posts: posts.posts,
      loading: loading['posts/LIST_POSTS'],
    }),
    shallowEqual // shallowEqual을 사용하여 얕은 비교 수행
  );

  // 포스트 데이터가 없거나 로딩 중이면 아무것도 보여주지 않음
  if (!posts || loading) return null;

  return (
    <Pagination
      tag={tag}
      username={username}
      page={parseInt(page, 10)}
      lastPage={lastPage}
    />
  );
};

export default PaginationContainer;
