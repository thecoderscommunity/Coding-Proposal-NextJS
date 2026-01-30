'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Flame, MapPin, Calendar } from 'lucide-react';

const DINNER_LOCATIONS = [
  {
    id: 'italian',
    name: 'Italian Trattoria',
    description: 'Romantic candlelit Italian restaurant with pasta and wine',
    icon: '🍝',
  },
  {
    id: 'seaside',
    name: 'Seaside Restaurant',
    description: 'Beachfront dinner with ocean views and fresh seafood',
    icon: '🌊',
  },
  {
    id: 'home',
    name: 'Home Cooked Dinner',
    description: 'Intimate dinner at home with your favorite dishes',
    icon: '🏠',
  },
  {
    id: 'rooftop',
    name: 'Rooftop Bar & Grill',
    description: 'City views, fine dining, and sunset atmosphere',
    icon: '🌆',
  },
  {
    id: 'garden',
    name: 'Garden Restaurant',
    description: 'Outdoor garden setting with fairy lights and candles',
    icon: '🌹',
  },
];

interface DinnerLocation {
  id: string;
  name: string;
}

export default function GiftPage() {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const selectedLocationData = DINNER_LOCATIONS.find((loc) => loc.id === selectedLocation);

  const handleConfirm = () => {
    if (selectedLocation && selectedDate) {
      setShowConfirmation(true);
    }
  };

  if (showConfirmation && selectedLocationData) {
    return (
      <div className="w-full max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center space-y-8 animate-fade-in">
          <div className="space-y-6">
            <Flame className="w-20 h-20 mx-auto text-primary" />

            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Your Candlelit Dinner
            </h1>

            <p className="text-xl text-foreground/70">
              is confirmed!
            </p>
          </div>

          <div className="space-y-4 bg-secondary/50 rounded-2xl p-8 border border-accent/20">
            <div className="flex items-center gap-3 justify-center text-foreground/80">
              <MapPin className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-foreground/60">Location</p>
                <p className="font-bold text-lg">{selectedLocationData.name}</p>
              </div>
            </div>

            <div className="border-t border-accent/20 pt-4 flex items-center gap-3 justify-center text-foreground/80">
              <Calendar className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-foreground/60">Date & Time</p>
                <p className="font-bold text-lg">
                  {new Date(selectedDate).toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-pink-500/10 rounded-2xl p-6 border border-accent/30">
            <p className="text-foreground/80">
              <span className="font-semibold">Special Instructions:</span> I've arranged everything. You just need to dress up, look beautiful, and let me take care of the rest. This night is all about us.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-lg font-semibold text-foreground">Can't wait to celebrate with you! 💕</p>
            <div className="flex justify-center gap-2">
              <Heart className="w-6 h-6 text-primary fill-primary" />
              <Heart className="w-6 h-6 text-primary fill-primary" />
              <Heart className="w-6 h-6 text-primary fill-primary" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 space-y-8">
        <div className="text-center space-y-4">
          <Flame className="w-16 h-16 mx-auto text-primary" />
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Your Gift Awaits
          </h1>
          <p className="text-lg text-foreground/70">
            A romantic candlelit dinner for two
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            Choose Your Location
          </h2>

          <div className="grid gap-3">
            {DINNER_LOCATIONS.map((location) => (
              <button
                key={location.id}
                onClick={() => setSelectedLocation(location.id)}
                className={`p-4 rounded-2xl border-2 transition-all duration-200 text-left ${
                  selectedLocation === location.id
                    ? 'border-primary bg-primary/10'
                    : 'border-secondary bg-secondary/50 hover:border-accent'
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{location.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground">{location.name}</h3>
                    <p className="text-sm text-foreground/70">{location.description}</p>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all ${
                      selectedLocation === location.id
                        ? 'border-primary bg-primary'
                        : 'border-foreground/30'
                    }`}
                  >
                    {selectedLocation === location.id && (
                      <Heart className="w-3 h-3 text-white fill-white" />
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {selectedLocation && (
          <div className="space-y-4 animate-fade-in">
            <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Pick Your Date & Time
            </h2>

            <input
              type="datetime-local"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full p-4 rounded-xl border-2 border-secondary focus:border-primary focus:outline-none transition-colors"
            />

            {selectedDate && (
              <div className="bg-secondary/50 rounded-xl p-4 text-sm text-foreground/70">
                <p>
                  You've chosen:{' '}
                  <span className="font-semibold text-foreground">
                    {new Date(selectedDate).toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </p>
              </div>
            )}
          </div>
        )}

        <Button
          onClick={handleConfirm}
          disabled={!selectedLocation || !selectedDate}
          className="w-full bg-gradient-to-r from-primary to-pink-500 hover:from-primary/90 hover:to-pink-500/90 text-white font-bold py-6 rounded-xl text-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          Confirm Dinner Reservation
        </Button>

        <p className="text-center text-sm text-foreground/60">
          This is my gift to you. Everything is on me. You just choose when and where!
        </p>
      </div>
    </div>
  );
}
