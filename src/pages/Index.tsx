<<<<<<< HEAD
const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center" 
         style={{ background: 'var(--gradient-bg)' }}>
      <div className="text-center animate-fade-in">
        <div className="relative">
          <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-pulse-glow">
            Hi
          </h1>
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl rounded-full animate-pulse-glow opacity-50"></div>
        </div>
        <p className="text-xl text-muted-foreground mt-8 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
          Welcome to your beautiful page
        </p>
      </div>
=======

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Building2, TestTube, Users, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">HealthCare System</h1>
          <div className="flex gap-2">
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link to="/register">
              <Button>Register</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">Complete Healthcare Management</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Book appointments, manage diagnostic centers, and access comprehensive healthcare services all in one place.
        </p>
        <Link to="/register">
          <Button size="lg" className="mr-4">Get Started</Button>
        </Link>
        <Link to="/centers">
          <Button variant="outline" size="lg">Browse Centers</Button>
        </Link>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">Our Services</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Calendar className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Book Appointments</CardTitle>
              <CardDescription>
                Schedule appointments with diagnostic centers easily
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/appointments">
                <Button variant="outline" className="w-full">Book Now</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Building2 className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Diagnostic Centers</CardTitle>
              <CardDescription>
                Find and connect with certified diagnostic centers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/centers">
                <Button variant="outline" className="w-full">Browse Centers</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <TestTube className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Diagnostic Tests</CardTitle>
              <CardDescription>
                Comprehensive range of diagnostic tests available
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/tests">
                <Button variant="outline" className="w-full">View Tests</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Patient Portal</CardTitle>
              <CardDescription>
                Manage your health records and appointments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/dashboard">
                <Button variant="outline" className="w-full">Access Portal</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Shield className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Center Management</CardTitle>
              <CardDescription>
                Tools for diagnostic center administrators
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/center-admin">
                <Button variant="outline" className="w-full">Manage Center</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Shield className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Admin Panel</CardTitle>
              <CardDescription>
                System administration and oversight
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/admin">
                <Button variant="outline" className="w-full">Admin Access</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <p>&copy; 2024 HealthCare System. All rights reserved.</p>
        </div>
      </footer>
>>>>>>> 2ba868a (inital commit)
    </div>
  );
};

export default Index;
