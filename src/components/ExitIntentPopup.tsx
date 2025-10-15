"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { X, Mail, ArrowRight, Shield, Users, FileText, BellOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ExitIntentPopupProps {
  onClose?: () => void;
  onSignup?: (email: string) => Promise<boolean>;
}

export const ExitIntentPopup = ({ onClose, onSignup }: ExitIntentPopupProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [hasTriggered, setHasTriggered] = useState(false);

  // Check if popup has been shown this session
  useEffect(() => {
    const shown = sessionStorage.getItem('exitIntentShown');
    if (shown) {
      setHasTriggered(true);
    }
  }, []);

  // Exit intent detection
  const handleMouseLeave = useCallback((e: MouseEvent) => {
    // Only trigger if mouse leaves from the top of the page
    if (e.clientY <= 0 && !hasTriggered && !isVisible) {
      setIsVisible(true);
      setHasTriggered(true);
      sessionStorage.setItem('exitIntentShown', 'true');
    }
  }, [hasTriggered, isVisible]);

  // Mobile scroll-up detection
  const handleTouchMove = useCallback((e: TouchEvent) => {
    const touch = e.touches[0];
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Detect upward scroll at top of page
    if (scrollTop <= 100 && touch.clientY > 100 && !hasTriggered && !isVisible) {
      setIsVisible(true);
      setHasTriggered(true);
      sessionStorage.setItem('exitIntentShown', 'true');
    }
  }, [hasTriggered, isVisible]);

  useEffect(() => {
    if (!hasTriggered) {
      // Add delay to avoid false positives
      const timer = setTimeout(() => {
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('touchmove', handleTouchMove);
      }, 3000);

      return () => {
        clearTimeout(timer);
        document.removeEventListener('mouseleave', handleMouseLeave);
        document.removeEventListener('touchmove', handleTouchMove);
      };
    }
  }, [handleMouseLeave, handleTouchMove, hasTriggered]);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email) {
      setError('Please enter your email address');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    
    try {
      const success = await onSignup?.(email) ?? true;
      if (success) {
        setIsSuccess(true);
        setTimeout(() => {
          handleClose();
        }, 2000);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isVisible || hasTriggered && !isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-md bg-card border border-border rounded-2xl shadow-2xl animate-in zoom-in-95 duration-300">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="p-8">
          {isSuccess ? (
            // Success state
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Thank you!</h3>
              <p className="text-muted-foreground">
                Your AI Trends Report is on its way to your inbox.
              </p>
            </div>
          ) : (
            // Main content
            <>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-heading font-bold mb-2">
                  Wait! Before you go...
                </h2>
                <p className="text-muted-foreground">
                  Get our exclusive <strong className="text-foreground">AI Trends Report</strong> that +2000 professionals rely on for weekly insights.
                </p>
              </div>

              {/* Value proposition */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                  <span>Latest AI breakthroughs and industry analysis</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                  <span>Actionable insights for business leaders</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                  <span>Free weekly updates delivered to your inbox</span>
                </div>
              </div>

              {/* Email form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full"
                    disabled={isLoading}
                  />
                  {error && (
                    <p className="text-destructive text-sm mt-2">{error}</p>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                      Getting your report...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      Get Free Report
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </div>
                  )}
                </Button>
              </form>

              {/* Trust indicators */}
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[11px] leading-none text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Shield className="h-3 w-3" aria-hidden="true" />
                    <span>No spam</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-3 w-3" aria-hidden="true" />
                    <span>+2000 subscribers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BellOff className="h-3 w-3" aria-hidden="true" />
                    <span>Unsubscribe anytime</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};