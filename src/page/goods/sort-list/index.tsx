import { useParams } from 'react-router-dom';

export default function GoodSortListPage() {
  const params = useParams();
  console.log(params);
  return <div className='i-page demo'>{location.pathname}</div>;
}
