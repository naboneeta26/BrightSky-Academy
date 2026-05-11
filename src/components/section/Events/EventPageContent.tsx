"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { events } from "@/data/eventContent";
import { Clock, MapPin } from "lucide-react";
import { useState } from "react";

export default function EventPageContent() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(events.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedEvents = events.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section>
      {/* Event Section */}
      <div className="py-24 bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Upcoming Events
            </h1>
            <p className="text-xl text-gray-600">
              Join us for our upcoming school activities and celebrations.
            </p>
          </div>

          <div className="space-y-6 mb-12">
            {paginatedEvents.map((event, index) => (
              <Card
                key={index}
                className="border-none shadow-sm p-0 hover:shadow-md transition-all duration-300 rounded-3xl overflow-hidden bg-white group"
              >
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="bg-purple-500 text-white p-8 flex flex-col items-center justify-center text-center md:w-48">
                      <span className="text-3xl font-bold">
                        {event.date.split(" ")[1].replace(",", "")}
                      </span>
                      <span className="text-sm font-medium uppercase tracking-widest">
                        {event.date.split(" ")[0]}
                      </span>
                      <span className="text-xs mt-2 opacity-80">
                        {event.date.split(" ")[2]}
                      </span>
                    </div>
                    <div className="p-8 grow">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                        {event.title}
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <Clock size={16} className="text-blue-500" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-blue-500" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {event.desc}
                      </p>
                      <div className="mt-8">
                        <Button className="rounded-xl px-10 bg-gray-700 hover:bg-purple-600 transition-colors cursor-pointer">
                          Register Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4">
              <Button
                variant="outline"
                onClick={() => {
                  setCurrentPage((prev) => Math.max(prev - 1, 1));
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                disabled={currentPage === 1}
                className="rounded-xl"
              >
                Previous
              </Button>
              <div className="flex gap-2">
                {[...Array(totalPages)].map((_, i) => (
                  <Button
                    key={i}
                    variant={currentPage === i + 1 ? "default" : "ghost"}
                    onClick={() => {
                      setCurrentPage(i + 1);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="w-10 h-10 rounded-full"
                  >
                    {i + 1}
                  </Button>
                ))}
              </div>
              <Button
                variant="outline"
                onClick={() => {
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages));
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                disabled={currentPage === totalPages}
                className="rounded-xl"
              >
                Next
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
