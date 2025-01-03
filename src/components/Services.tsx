import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Server, Shield, Wallet, Package, Code, Laptop, Database, Cog, BookOpen, FileCheck } from 'lucide-react';

const services = [
  {
    title: "Data Center Solutions",
    description: "Comprehensive data center infrastructure design and maintenance services.",
    icon: Server,
    href: "/services/data-center",
  },
  {
    title: "Managed Services",
    description: "End-to-end IT infrastructure management and support.",
    icon: Cog,
    href: "/services/managed-services",
  },
  {
    title: "Digital Banking",
    description: "Modern banking solutions for the digital age.",
    icon: Wallet,
    href: "/services/digital-banking",
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets.",
    icon: Shield,
    href: "/services/cybersecurity",
  },
  {
    title: "Business Applications",
    description: "Custom business applications tailored to your needs.",
    icon: Database,
    href: "/services/business-applications",
  },
  {
    title: "IT Supplies",
    description: "Quality hardware and software solutions for your business.",
    icon: Package,
    href: "/services/it-supplies",
  },
  {
    title: "Technology Resourcing",
    description: "Expert IT staffing and talent solutions.",
    icon: Code,
    href: "/services/technology-resourcing",
  },
  {
    title: "Bespoke Development",
    description: "Custom software development services.",
    icon: Laptop,
    href: "/services/bespoke-development",
  },
  {
    title: "Technology Training",
    description: "Comprehensive IT training programs.",
    icon: BookOpen,
    href: "/services/technology-training",
  },
  {
    title: "NOTAP Certification",
    description: "Expert assistance with NOTAP certification process.",
    icon: FileCheck,
    href: "/services/notap-certification",
  },
];

export const Services = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive technology solutions for your business</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-[#ea384c] mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <a 
                    href={service.href}
                    className="text-[#ea384c] hover:text-[#d02e40] font-medium"
                  >
                    Learn more →
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};