import React, { Suspense } from 'react'
import Head from '../Helper/Head'
import { STATS_GET } from '../../env';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
const UserStatusGraphs = React.lazy(() => import('./UserStatusGraphs'));

const UserStatus = () => {
  const {data,error,loading,request} = useFetch();

  React.useEffect(() => {
    async function getData() {
      const {url, options} = STATS_GET();
      await request(url, options)
    }
    getData();
  },[request]);

  if(loading) return <Loading />
  if(error) return <Error error={error} />
  if(data) return (
    <Suspense fallback={<div></div>}>
      <Head title="Estatísticas" />
      <UserStatusGraphs data={data} />
    </Suspense>
  );
  else return null;
}

export default UserStatus