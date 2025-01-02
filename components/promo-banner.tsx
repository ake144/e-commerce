import { Button } from "@/components/ui/button"

export function PromoBanners() {
  return (
    <section className="pb-12">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Fruits & Vegetables Banner */}
          <div className="relative overflow-hidden rounded-lg bg-gray-50">
            <div className="flex items-center p-8">
              <div className="max-w-[50%]">
                <h3 className="text-2xl font-bold mb-2">Fruits & Vegetables</h3>
                <p className="text-green-600 font-medium mb-4">Get Upto 30% Off</p>
                <Button variant="default" className="bg-gray-900 hover:bg-gray-800">
                  Shop Now
                </Button>
              </div>
              <div className="absolute right-0 top-0 w-[50%] h-full">
                <img
                  src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Fresh fruits and vegetables"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Freshly Baked Buns Banner */}
          <div className="relative overflow-hidden rounded-lg bg-gray-100">
            <div className="flex items-center p-8">
              <div className="max-w-[50%]">
                <h3 className="text-2xl font-bold mb-2">Food and Drink</h3>
                <p className="text-green-600 font-medium mb-4">Get Upto 25% Off</p>
                <Button variant="default" className="bg-gray-900 hover:bg-gray-800">
                  Shop Now
                </Button>
              </div>
              <div className="absolute right-0 top-0 w-[50%] h-full">
                <img
                  src="https://images.unsplash.com/photo-1499096382193-ebb232527fee?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Fresh baked buns"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

