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
    </div>
  );
};

export default Index;
