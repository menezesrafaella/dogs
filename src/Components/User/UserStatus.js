import React from 'react'
import Head from '../Helper/Head'
import { STATS_GET } from '../../env';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import UserStatusGraphs from './UserStatusGraphs';

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
    <div>
      <Head title="Estatísticas" />
      <UserStatusGraphs data={data} />
    </div>
  );
  else return null;
}

export default UserStatus