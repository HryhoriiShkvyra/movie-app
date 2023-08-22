const wholeApp = [{
    path: "/index",
    content: {
        navbar: {
            movie: {
                path: "",
                content: {
                    movie_popular: {
                        path: "/movie",
                        content: {
                            search_logic, cards
                        }
                    },
                    movie_now_playing: {
                        path: "/movie/now-playing",
                        content: {
                            search_logic, cards
                        }
                    },
                    movie_upcoming: {
                        path: "/movie/upcoming",
                        content: {
                            search_logic, cards
                        }
                    },
                    movie_top_rated: {
                        path: "/movie/top-rated",
                        content: {
                            search_logic, cards
                        }
                    },
                    movie_page: {
                        path: "/movie/movie_id-movie_title",
                        content: {
                            movie_card,
                            movie_scroll,
                            movie_content, movie_additional_info,
                            movie_latest_news, movie_content_score,
                            movie_recommendations, movie_popularity_trend,
                        }
                    }     
                }
                
            },
            tv: {
                path: "",
                content: {
                    tv_popular: {
                        path: "/tv",
                        content: {
                            search_logic, cards
                        }
                    },
                    tv_airing_today: {
                        path: "/tv/airing_today",
                        content: {
                            search_logic, cards
                        }
                    },
                    tv_on_the_air: {
                        path: "/tv/on_the_air",
                        content: {
                            search_logic, cards
                        }
                    },
                    tv_top_rated: {
                        path: "/tv/top-rated",
                        content: {
                            search_logic, cards
                        }
                    },
                    tv_page: {
                        path: "/tv/tv_id-tv_name",
                        content: {
                            tv_card,
                            tv_scroll,
                            tv_content, tv_additional_info,
                            tv_latest_news, tv_content_score,
                            tv_recommendations, tv_popularity_trend,
                        }
                    }     
                }
                
            },
            people: {
                path: "",
                content: {
                    popular_people: {
                        path: "/person",
                        content: {people_cards}
                    }
                },
            },
            more: {
                path: "",
                content: {
                    discussions: {
                        path: "/discuss",
                        content: {
                            recent_movie_discussions: {
                                path: "?"
                            },
                            recent_tv_discussions: {
                                path: "?"
                            },
                            recent_celebrity_discussions: {
                                path: "?"
                            }
                        }
                    }

                },
            },
        },
        search: {
            path: "search/input-value"
        },
        trending_scroll:
         

       
    },
        
}
]