import { AuthContext } from "../context/AuthContext";

import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState, useContext } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import {styl} from "../theme"
import MovieList from "../components/MovieList";
import { useNavigation } from "@react-navigation/native";
import Loading from "../components/loading";
import { fetchUpcomingMovies } from "../api/moviedb";


export default function Proximamente(){
  const [upcoming, setUpcoming]= useState([]);
  const navigation = useNavigation();
  const [loading,setLoading]= useState(true);

  useEffect(()=>{
      getUpComingMovies();
  },[])
  
  const getUpComingMovies = async ()=>{
      const data = await fetchUpcomingMovies();
      //console.log('got upcoming movies: ', data);
      if(data && data.results) setUpcoming(data.results);
      setLoading(false);
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
                      {/*upcoming movies row */}
                      <MovieList title="Upcoming" data={upcoming} />
                  </ScrollView>
              )
          }
      </View>
  )
}


