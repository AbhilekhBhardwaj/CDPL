"use client"

import { useState, useEffect } from "react"
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { Card, CardContent } from "./components/ui/card"
import { Badge } from "./components/ui/badge"
import {
  Building2,
  MapPin,
  Phone,
  Mail,
  Star,
  ChevronLeft,
  ChevronRight,
  Home,
  Users,
  Award,
  TrendingUp,
  ArrowRight,
  Play,
  Shield,
  Clock,
  Heart,
  Sparkles,
  Target,
  Zap,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const properties = [
  {
    id: 1,
    title: "Modern Penthouse Suite",
    location: "Morabadi, Ranchi",
    price: "₹4.2 Cr",
    type: "Penthouse",
    bedrooms: 4,
    bathrooms: 4,
    area: "4200 sq ft",
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
  },
  {
    id: 2,
    title: "Smart Home Apartment",
    location: "Kanke Road, Ranchi",
    price: "₹2.1 Cr",
    type: "Apartment",
    bedrooms: 3,
    bathrooms: 3,
    area: "2100 sq ft",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
  {
    id: 3,
    title: "Executive Office Space",
    location: "Lalpur ,Ranchi",
    price: "₹6.8 Cr",
    type: "Commercial",
    bedrooms: 0,
    bathrooms: 4,
    area: "3500 sq ft",
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
  },
]

const testimonials = [
  {
    name: "Arjun Mehta",
    location: "Ranchi",
    rating: 5,
    text: "CDPL's innovative approach and attention to detail made our property search effortless. Truly exceptional service.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Kavya Singh",
    location: "Ranchi",
    rating: 5,
    text: "The team at CDPL understood our vision perfectly. They delivered beyond our expectations with professionalism.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Rohit Gupta",
    location: "Ranchi",
    rating: 5,
    text: "Outstanding experience from start to finish. CDPL made our dream home a reality with their expertise.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export default function CDPLLanding() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % properties.length);
    }, 6000);
  
    return () => {
      clearInterval(timer);
    };
  }, []);
  

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % properties.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + properties.length) % properties.length)
  }

  return (
    <div className="min-h-screen bg-beige-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-xl border-b border-beige-200 z-50 transition-all duration-300">
        <div className="container mx-auto px-4 lg:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3 animate-slide-in-left">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-forest-600 to-forest-800 rounded-2xl flex items-center justify-center transform rotate-12 animate-bounce-gentle">
                <Building2 className="h-7 w-7 text-white transform -rotate-12" />
              </div>
            </div>
            <div>
              <span className="text-3xl font-black bg-gradient-to-r from-forest-700 to-forest-800 bg-clip-text text-transparent">
                CDPL
              </span>
              <div className="text-xs text-navy-600 font-medium tracking-wider">REAL ESTATE</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-10 animate-fade-in">
            <Link
              href="#home"
              className="text-navy-700 hover:text-forest-800 transition-all duration-300 font-semibold text-lg hover:scale-105"
            >
              Home
            </Link>
            <Link
              href="#properties"
              className="text-navy-700 hover:text-forest-800 transition-all duration-300 font-semibold text-lg hover:scale-105"
            >
              Properties
            </Link>
            <Link
              href="#about"
              className="text-navy-700 hover:text-forest-800 transition-all duration-300 font-semibold text-lg hover:scale-105"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-navy-700 hover:text-forest-800 transition-all duration-300 font-semibold text-lg hover:scale-105"
            >
              Contact
            </Link>
          </nav>
          <Button className="bg-gradient-to-r from-forest-600 to-forest-800 hover:from-forest-700 hover:to-forest-900 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in-right">
            Get Started
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-28 min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-beige-50 via-beige-100 to-beige-200"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-forest-200/40 to-forest-300/40 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-beige-300/30 to-forest-200/30 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-forest-200/40 rounded-full animate-rotate-slow"></div>
          <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-forest-400 rounded-full animate-pulse-slow"></div>
          <div
            className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-forest-400 rounded-full animate-bounce-gentle"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className={`transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
            >
              <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-forest-200 animate-scale-in">
                <div className="w-2 h-2 bg-forest-800 rounded-full animate-pulse"></div>
                <Sparkles className="h-4 w-4 text-forest-800 animate-pulse" />
                <span className="text-navy-700 font-semibold">{"India's Premier Real Estate Partner"}</span>
              </div>

              <h1 className="text-6xl md:text-8xl font-black text-navy-900 mb-8 leading-none animate-fade-in">
                Discover
                <span
                  className="block bg-gradient-to-r from-forest-700 to-forest-800 bg-clip-text text-transparent animate-slide-in-left"
                  style={{ animationDelay: "0.3s" }}
                >
                  Luxury
                </span>
                <span
                  className="block text-5xl md:text-6xl font-light text-navy-600 animate-slide-in-left"
                  style={{ animationDelay: "0.6s" }}
                >
                  Living
                </span>
              </h1>

              <p
                className="text-2xl text-navy-600 mb-10 leading-relaxed font-light animate-fade-in"
                style={{ animationDelay: "0.9s" }}
              >
                Experience premium properties across Ranchi, Jharkhand with cutting-edge design and unmatched sophistication.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 animate-fade-in" style={{ animationDelay: "1.2s" }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-forest-600 to-forest-800 hover:from-forest-700 hover:to-forest-900 text-white px-10 py-6 text-xl rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group hover:scale-105"
                >
                  <Target className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                  Explore Collection
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-forest-300 text-forest-800 hover:bg-forest-50 px-10 py-6 text-xl rounded-2xl font-semibold bg-white/70 backdrop-blur-sm group hover:scale-105 transition-all duration-300"
                >
                  <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                  Watch Tour
                </Button>
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            >
              <div className="relative animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-forest-400/20 to-forest-500/20 rounded-3xl transform rotate-6 animate-pulse-slow"></div>
                <div className="relative bg-white rounded-3xl p-2 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                  <Image
                    src="/cdpl.jpg?height=400&width=500"
                    alt="Luxury Property"
                    width={500}
                    height={600}
                    className="rounded-2xl object-cover"
                  />
                </div>

                {/* Floating Stats Cards with enhanced animations */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-beige-200 animate-bounce-gentle hover:scale-110 transition-all duration-300">
                  <div className="text-3xl font-bold text-forest-800">500+</div>
                  <div className="text-navy-600 font-medium">Properties Sold</div>
                </div>

                <div
                  className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-beige-200 animate-bounce-gentle hover:scale-110 transition-all duration-300"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="text-3xl font-bold text-forest-800">15+</div>
                  <div className="text-navy-600 font-medium">Years Experience</div>
                </div>

                {/* Additional floating elements */}
                <div className="absolute top-1/4 -left-4 w-8 h-8 bg-gradient-to-br from-forest-400 to-forest-500 rounded-full animate-pulse-slow opacity-70"></div>
                <div
                  className="absolute bottom-1/4 -right-4 w-6 h-6 bg-gradient-to-br from-forest-400 to-forest-500 rounded-full animate-bounce-gentle opacity-70"
                  style={{ animationDelay: "2s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Slider */}
      <section id="properties" className="py-24 bg-white">
  <div className="container mx-auto px-4 lg:px-6">
    <div className="text-center mb-20">
      <div className="inline-flex items-center space-x-2 bg-forest-50 rounded-full px-6 py-3 mb-6 animate-scale-in">
        <Heart className="h-5 w-5 text-forest-800 animate-pulse" />
        <span className="text-forest-800 font-semibold">Curated Collection</span>
      </div>
      <h2 className="text-5xl md:text-7xl font-black text-navy-900 mb-8 animate-fade-in">
        Featured
        <span
          className="block bg-gradient-to-r from-forest-700 to-forest-800 bg-clip-text text-transparent animate-slide-in-left"
          style={{ animationDelay: "0.2s" }}
        >
          Properties
        </span>
      </h2>
      <p
        className="text-2xl text-navy-600 max-w-3xl mx-auto font-light animate-fade-in"
        style={{ animationDelay: "0.4s" }}
      >
        Handpicked premium properties that redefine luxury living
      </p>
    </div>

    <div className="relative max-w-7xl mx-auto">
      <div className="overflow-hidden rounded-3xl">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {properties.map((property, index) => (
            <div key={property.id} className="w-full flex-shrink-0">
              <div className="bg-gradient-to-br from-white to-beige-50 rounded-3xl overflow-hidden shadow-2xl border border-beige-200 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                <div className="grid lg:grid-cols-5 gap-0">
                  <div className="lg:col-span-3 relative h-96 lg:h-[600px] group">
                    <Image
                      src={property.image || "/placeholder.svg"}
                      alt={property.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    {property.featured && (
                      <div className="absolute top-6 left-6 animate-bounce-gentle">
                        <Badge className="bg-gradient-to-r from-forest-600 to-forest-800 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                          <Zap className="h-4 w-4 mr-1" />
                          Featured
                        </Badge>
                      </div>
                    )}
                    <div className="absolute top-6 right-6 animate-slide-in-right">
                      <Badge className="bg-white/90 backdrop-blur-sm text-navy-700 px-4 py-2 rounded-full font-semibold border border-beige-200 hover:scale-105 transition-transform">
                        {property.type}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="lg:col-span-2 p-12 flex flex-col justify-center">
                    <div className="mb-8">
                      <h3 className="text-4xl font-black text-navy-900 mb-4 leading-tight hover:text-forest-800 transition-colors duration-300">
                        {property.title}
                      </h3>
                      <div className="flex items-center text-navy-600 mb-6 text-lg group">
                        <MapPin className="h-6 w-6 mr-3 text-forest-800 group-hover:animate-bounce" />
                        {property.location}
                      </div>
                      <div className="text-4xl font-black bg-gradient-to-r from-forest-700 to-forest-800 bg-clip-text text-transparent mb-8 animate-pulse-slow">
                        {property.price}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-10">
                      {property.bedrooms > 0 && (
                        <div className="text-center p-4 bg-gradient-to-br from-forest-50 to-forest-100 rounded-2xl border border-forest-100 hover:scale-105 transition-transform duration-300 hover:shadow-lg">
                          <div className="font-black text-2xl text-navy-900">{property.bedrooms}</div>
                          <div className="text-sm text-navy-600 font-medium">Bedrooms</div>
                        </div>
                      )}
                      <div className="text-center p-4 bg-gradient-to-br from-forest-50 to-forest-100 rounded-2xl border border-forest-100 hover:scale-105 transition-transform duration-300 hover:shadow-lg">
                        <div className="font-black text-2xl text-navy-900">{property.bathrooms}</div>
                        <div className="text-sm text-navy-600 font-medium">Bathrooms</div>
                      </div>
                      <div className="text-center p-4 bg-gradient-to-br from-forest-50 to-forest-100 rounded-2xl border border-forest-100 hover:scale-105 transition-transform duration-300 hover:shadow-lg">
                        <div className="font-black text-lg text-navy-900">{property.area}</div>
                        <div className="text-sm text-navy-600 font-medium">Area</div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button className="flex-1 bg-gradient-to-r from-forest-600 to-forest-800 hover:from-forest-700 hover:to-forest-900 text-white rounded-2xl py-4 font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                        <Target className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                        View Details
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 border-2 border-forest-300 text-forest-800 hover:bg-forest-50 rounded-2xl py-4 font-semibold text-lg bg-white hover:scale-105 transition-all duration-300"
                      >
                        Schedule Visit
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-2 border-forest-200 shadow-xl w-16 h-16 rounded-2xl hover:scale-110 transition-all duration-300 group"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-8 w-8 text-forest-800 group-hover:-translate-x-1 transition-transform" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-2 border-forest-200 shadow-xl w-16 h-16 rounded-2xl hover:scale-110 transition-all duration-300 group"
        onClick={nextSlide}
      >
        <ChevronRight className="h-8 w-8 text-forest-800 group-hover:translate-x-1 transition-transform" />
      </Button>

      {/* Enhanced Dots Indicator */}
      <div className="flex justify-center mt-12 space-x-3">
        {properties.map((_, index) => (
          <button
            key={index}
            className={`h-4 rounded-full transition-all duration-300 hover:scale-125 ${
              index === currentSlide
                ? "bg-gradient-to-r from-forest-600 to-forest-800 w-12 animate-pulse"
                : "bg-forest-200 w-4 hover:bg-forest-300"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  </div>
</section>


      {/* About Section */}
      <section
        id="about"
        className="py-24 bg-gradient-to-br from-navy-900 via-navy-800 to-blue-900 text-white relative overflow-hidden"
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-forest-500/20 to-forest-600/20 animate-pulse-slow"></div>
          <div className="absolute top-20 right-20 w-32 h-32 border border-forest-400/30 rounded-full animate-rotate-slow"></div>
          <div
            className="absolute bottom-20 left-20 w-24 h-24 border border-forest-400/30 rounded-full animate-rotate-slow"
            style={{ animationDirection: "reverse" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="animate-slide-in-left">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 animate-scale-in">
                <Award className="h-5 w-5 text-forest-400 animate-bounce-gentle" />
                <span className="text-forest-200 font-semibold">About CDPL</span>
              </div>

              <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight animate-fade-in">
                Crafting Dreams Into
                <span
                  className="block bg-gradient-to-r from-forest-400 to-forest-500 bg-clip-text text-transparent animate-slide-in-left"
                  style={{ animationDelay: "0.3s" }}
                >
                  Reality
                </span>
              </h2>

              <p
                className="text-xl text-blue-100 mb-10 leading-relaxed font-light animate-fade-in"
                style={{ animationDelay: "0.6s" }}
              >
                For over 15 years, CDPL has been at the forefront of luxury real estate in Ranchi, Jharkhand. We don't just sell
                properties; we create lifestyle experiences that exceed expectations.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="flex items-center space-x-4 animate-slide-in-left" style={{ animationDelay: "0.9s" }}>
                  <div className="w-12 h-12 bg-gradient-to-br from-forest-600 to-forest-800 rounded-2xl flex items-center justify-center animate-bounce-gentle">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Trusted Service</div>
                    <div className="text-blue-200 text-sm">15+ Years Experience</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 animate-slide-in-left" style={{ animationDelay: "1.2s" }}>
                  <div
                    className="w-12 h-12 bg-gradient-to-br from-forest-600 to-forest-800 rounded-2xl flex items-center justify-center animate-bounce-gentle"
                    style={{ animationDelay: "1s" }}
                  >
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Quick Process</div>
                    <div className="text-blue-200 text-sm">Fast & Efficient</div>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-gradient-to-r from-forest-600 to-forest-800 hover:from-forest-700 hover:to-forest-900 text-white px-10 py-4 rounded-2xl font-semibold shadow-xl hover:scale-105 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: "1.5s" }}
              >
                Discover Our Story
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-8 animate-slide-in-right">
              <div className="space-y-8">
                <Card className="p-8 text-center border-0 shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl hover:scale-105 transition-all duration-500 animate-float">
                  <Home className="h-16 w-16 text-forest-400 mx-auto mb-6 animate-bounce-gentle" />
                  <div className="text-4xl font-black text-white mb-3">500+</div>
                  <div className="text-blue-200 font-medium">Properties Delivered</div>
                </Card>
                <Card
                  className="p-8 text-center border-0 shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl hover:scale-105 transition-all duration-500 animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <Award
                    className="h-16 w-16 text-forest-400 mx-auto mb-6 animate-bounce-gentle"
                    style={{ animationDelay: "0.5s" }}
                  />
                  <div className="text-4xl font-black text-white mb-3">25+</div>
                  <div className="text-blue-200 font-medium">Awards Won</div>
                </Card>
              </div>
              <div className="space-y-8 mt-12">
                <Card
                  className="p-8 text-center border-0 shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl hover:scale-105 transition-all duration-500 animate-float"
                  style={{ animationDelay: "2s" }}
                >
                  <Users
                    className="h-16 w-16 text-forest-400 mx-auto mb-6 animate-bounce-gentle"
                    style={{ animationDelay: "1s" }}
                  />
                  <div className="text-4xl font-black text-white mb-3">1000+</div>
                  <div className="text-blue-200 font-medium">Happy Families</div>
                </Card>
                <Card
                  className="p-8 text-center border-0 shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl hover:scale-105 transition-all duration-500 animate-float"
                  style={{ animationDelay: "3s" }}
                >
                  <TrendingUp
                    className="h-16 w-16 text-forest-400 mx-auto mb-6 animate-bounce-gentle"
                    style={{ animationDelay: "1.5s" }}
                  />
                  <div className="text-4xl font-black text-white mb-3">99%</div>
                  <div className="text-blue-200 font-medium">Success Rate</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-beige-50 to-beige-100">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-forest-200 animate-scale-in">
              <Star className="h-5 w-5 text-forest-800 animate-pulse" />
              <span className="text-forest-800 font-semibold">Client Stories</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-navy-900 mb-8 animate-fade-in">
              What Our Clients
              <span
                className="block bg-gradient-to-r from-forest-700 to-forest-800 bg-clip-text text-transparent animate-slide-in-left"
                style={{ animationDelay: "0.3s" }}
              >
                Say About Us
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white rounded-3xl border border-beige-200 group hover:-translate-y-4 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-0">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-6 w-6 text-amber-400 fill-current animate-bounce-gentle"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                  <p className="text-navy-600 mb-8 italic text-lg leading-relaxed group-hover:text-forest-800 transition-colors duration-300">
                    {`"${testimonial.text}"`}
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="rounded-2xl object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-forest-400/20 to-forest-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div>
                      <div className="font-bold text-navy-900 text-lg group-hover:text-forest-800 transition-colors duration-300">
                        {testimonial.name}
                      </div>
                      <div className="text-forest-800 font-medium">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="animate-slide-in-left">
              <div className="inline-flex items-center space-x-2 bg-forest-50 rounded-full px-6 py-3 mb-8 animate-scale-in">
                <Mail className="h-5 w-5 text-forest-800 animate-bounce-gentle" />
                <span className="text-forest-800 font-semibold">Get In Touch</span>
              </div>

              <h2 className="text-5xl md:text-6xl font-black text-navy-900 mb-8 leading-tight animate-fade-in">
                Ready to Find Your
                <span
                  className="block bg-gradient-to-r from-forest-700 to-forest-800 bg-clip-text text-transparent animate-slide-in-left"
                  style={{ animationDelay: "0.3s" }}
                >
                  Perfect Space?
                </span>
              </h2>

              <p className="text-2xl text-navy-600 mb-12 font-light animate-fade-in" style={{ animationDelay: "0.6s" }}>
                {"Let's discuss your dream property. Our experts are ready to guide you through every step."}
              </p>

              <div className="space-y-8">
                <div
                  className="flex items-center space-x-6 animate-slide-in-left hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: "0.9s" }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-forest-600 to-forest-800 rounded-2xl flex items-center justify-center animate-bounce-gentle">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-navy-900 text-xl">Call Us</div>
                    <div className="text-forest-800 text-lg font-semibold">+91 98765 43210</div>
                  </div>
                </div>
                <div
                  className="flex items-center space-x-6 animate-slide-in-left hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: "1.2s" }}
                >
                  <div
                    className="w-16 h-16 bg-gradient-to-br from-forest-600 to-forest-800 rounded-2xl flex items-center justify-center animate-bounce-gentle"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-navy-900 text-xl">Email Us</div>
                    <div className="text-forest-800 text-lg font-semibold">hello@cdpl.com</div>
                  </div>
                </div>
                <div
                  className="flex items-center space-x-6 animate-slide-in-left hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: "1.5s" }}
                >
                  <div
                    className="w-16 h-16 bg-gradient-to-br from-forest-600 to-forest-800 rounded-2xl flex items-center justify-center animate-bounce-gentle"
                    style={{ animationDelay: "1s" }}
                  >
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-navy-900 text-xl">Visit Us</div>
                    <div className="text-forest-800 text-lg font-semibold">Chotanagpur, Ranchi</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden hover:shadow-3xl transition-all duration-500 animate-slide-in-right">
              <CardContent className="p-12 bg-gradient-to-br from-white to-beige-50">
                <h3 className="text-3xl font-black text-navy-900 mb-8 animate-fade-in">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <Input
                      placeholder="First Name"
                      className="border-2 border-forest-200 rounded-2xl py-4 px-6 text-lg focus:border-forest-800 hover:border-forest-300 transition-all duration-300 animate-slide-in-left"
                      style={{ animationDelay: "0.2s" }}
                    />
                    <Input
                      placeholder="Last Name"
                      className="border-2 border-forest-200 rounded-2xl py-4 px-6 text-lg focus:border-forest-800 hover:border-forest-300 transition-all duration-300 animate-slide-in-right"
                      style={{ animationDelay: "0.2s" }}
                    />
                  </div>
                  <Input
                    placeholder="Email Address"
                    type="email"
                    className="border-2 border-forest-200 rounded-2xl py-4 px-6 text-lg focus:border-forest-800 hover:border-forest-300 transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: "0.4s" }}
                  />
                  <Input
                    placeholder="Phone Number"
                    type="tel"
                    className="border-2 border-forest-200 rounded-2xl py-4 px-6 text-lg focus:border-forest-800 hover:border-forest-300 transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: "0.6s" }}
                  />
                  <textarea
                    placeholder="Tell us about your dream property..."
                    rows={5}
                    className="w-full p-6 border-2 border-forest-200 rounded-2xl resize-none focus:outline-none focus:border-forest-800 text-lg hover:border-forest-300 transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: "0.8s" }}
                  />
                  <Button
                    className="w-full bg-gradient-to-r from-forest-600 to-forest-800 hover:from-forest-700 hover:to-forest-900 text-white py-6 rounded-2xl font-semibold text-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-scale-in"
                    style={{ animationDelay: "1s" }}
                  >
                    <Sparkles className="mr-2 h-6 w-6" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="animate-fade-in">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-forest-600 to-forest-800 rounded-2xl flex items-center justify-center animate-bounce-gentle">
                  <Building2 className="h-7 w-7 text-white" />
                </div>
                <div>
                  <span className="text-3xl font-black">CDPL</span>
                  <div className="text-xs text-forest-400 font-medium tracking-wider">REAL ESTATE</div>
                </div>
              </div>
              <p className="text-blue-200 mb-6 leading-relaxed">
                Crafting exceptional real estate experiences across Ranchi, Jharkhand with innovation and excellence.
              </p>
            </div>

            <div className="animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
              <h4 className="font-bold mb-6 text-xl">Quick Links</h4>
              <div className="space-y-3">
                <Link
                  href="#home"
                  className="block text-blue-200 hover:text-forest-400 transition-all duration-300 text-lg hover:translate-x-2"
                >
                  Home
                </Link>
                <Link
                  href="#properties"
                  className="block text-blue-200 hover:text-forest-400 transition-all duration-300 text-lg hover:translate-x-2"
                >
                  Properties
                </Link>
                <Link
                  href="#about"
                  className="block text-blue-200 hover:text-forest-400 transition-all duration-300 text-lg hover:translate-x-2"
                >
                  About
                </Link>
                <Link
                  href="#contact"
                  className="block text-blue-200 hover:text-forest-400 transition-all duration-300 text-lg hover:translate-x-2"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div className="animate-slide-in-left" style={{ animationDelay: "0.4s" }}>
              <h4 className="font-bold mb-6 text-xl">Services</h4>
              <div className="space-y-3">
                <div className="text-blue-200 text-lg hover:text-forest-400 transition-colors duration-300 cursor-pointer">
                  Luxury Sales
                </div>
                <div className="text-blue-200 text-lg hover:text-forest-400 transition-colors duration-300 cursor-pointer">
                  Premium Rentals
                </div>
                <div className="text-blue-200 text-lg hover:text-forest-400 transition-colors duration-300 cursor-pointer">
                  Investment Advisory
                </div>
                <div className="text-blue-200 text-lg hover:text-forest-400 transition-colors duration-300 cursor-pointer">
                  Property Management
                </div>
              </div>
            </div>

            <div className="animate-slide-in-left" style={{ animationDelay: "0.6s" }}>
              <h4 className="font-bold mb-6 text-xl">Contact Info</h4>
              <div className="space-y-4 text-blue-200">
                <div className="text-lg hover:text-forest-400 transition-colors duration-300 cursor-pointer">
                  +91 98765 43210
                </div>
                <div className="text-lg hover:text-forest-400 transition-colors duration-300 cursor-pointer">
                  hello@cdpl.com
                </div>
                <div className="text-lg hover:text-forest-400 transition-colors duration-300 cursor-pointer">
                  Chotanagpur, Ranchi
                </div>
              </div>
            </div>
          </div>

          <div
            className="border-t border-navy-700 mt-12 pt-8 text-center text-blue-200 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <p className="text-lg">&copy; {new Date().getFullYear()} CDPL Real Estate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
