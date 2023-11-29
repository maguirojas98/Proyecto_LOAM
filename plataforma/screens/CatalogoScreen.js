import { AuthContext } from "../context/AuthContext";

import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState, useContext } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import {styl} from "../theme"
import TrendingMovie from "../components/TrendingMovies";
import MovieList from "../components/MovieList";
import { useNavigation } from "@react-navigation/native";
import Loading from "../components/loading";
import { fetchTopRatedMovies, fetchTrendingMovies } from "../api/moviedb";


export default function CatalogoScreen(){
  const [trending, setTrending]= useState([]);
  //const [upcoming, setUpcoming]= useState([]);
  const [toRated, setToRated]= useState([]);
  const navigation = useNavigation();
  const [loading,setLoading]= useState(true);

  useEffect(()=>{
      getTrendingMovies();
      //getUpComingMovies();
      getTopRatedMovies();
  },[])
  const getTrendingMovies = async ()=>{
      const data = await fetchTrendingMovies();
      //console.log('got trending movies: ', data);
      if(data && data.results) setTrending(data.results);
      setLoading(false);
  }
  const getTopRatedMovies = async ()=>{
      const data = await fetchTopRatedMovies();
      //console.log('got top rated movies: ', data);
      if(data && data.results) setToRated(data.results);
  }
  return(
      <View className="flex-1 bg-neutral-800">
          {/*busqueda y logo */}
          <SafeAreaView className="mb-3" style={{ paddingTop: 30}}>
              <StatusBar style="light" />
              <View className="flex-row justify-between items-center mx-4">
                  <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white"/>
                  <Text className="text-white text-3xl font-bold">
                      <Text style={styl.text}>M</Text>ovies
                  </Text>
                  <TouchableOpacity onPress={()=>navigation.navigate('Search')}>
                      <MagnifyingGlassIcon size="30" strokeWidth={2} color="white"/>
                  </TouchableOpacity>
              </View>
          </SafeAreaView>
          {
              loading? (
                  <Loading />
              ):(
                  <ScrollView
                          showsVerticalScrollIndicator={false}
                          contentContainerStyle={{paddingBottom: 10}}
                      >
                      {/*Trending Movie Carousel */}

                      { trending.length>0 && <TrendingMovie data={trending}/>}

                      {/*top rated movies row */}
                      <MovieList title="Top Rated" data={toRated} />
                  </ScrollView>
              )
          }
      </View>
  )
}
