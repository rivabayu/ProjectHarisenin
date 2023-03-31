import React, { useEffect, useState } from 'react'
import { db } from '../firebase.config'
import { collection, getDocs } from 'firebase/firestore'
const useGetData = (collectionName) => {
    const [loading, setLoading] = useState(true)

    const [data, setData] = useState([])
    const collectionRef = collection(db, collectionName)

    useEffect(() => {
        const getData = async () => {
            const data = await getDocs(collectionRef)
            setData(data.docs.map(doc => ({...doc.data(), id:doc.id})))
            setLoading(false)
        }
        getData()
    },[])
  return {data, loading}
}

export default useGetData
