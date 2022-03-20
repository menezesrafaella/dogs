import React, { useEffect } from 'react'
import { PHOTOS_GET } from '../../env'
import useFetch from '../../Hooks/useFetch'
import Error from '../Helper/Error'
import Loading from '../Helper/Loading'
import FeedPhotosItem from './FeedPhotosItem'
import styles from './FeedPhotos.module.css'

const FeedPhotos = () => {
    const { data,loading,error,request } = useFetch()

    useEffect(() => {
        async function fetchPhotos() {
            const {url, options} = PHOTOS_GET({page: 1, total: 6, user: 0})
            const {response, json} = await request(url,options)
        }
        fetchPhotos();
        console.log(data)
    }, [request])

    if (error) return <Error error={error} />
    if (loading) return <Loading />
    if (!data) return null
    console.log(data)
  return (
    <ul className={`${styles.feed} animeLeft`}>
        {data && data.map(photo => (
            <FeedPhotosItem photo={photo} key={photo.id}/>
        ))}
    </ul>
  )
}

export default FeedPhotos