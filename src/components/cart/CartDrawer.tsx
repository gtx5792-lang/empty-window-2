"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { formatPrice, cn } from "@/lib/utils";

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    subtotal,
    deliveryFee,
    tax,
    total,
    removeItem,
    updateQuantity,
  } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-[200] bg-void/70 backdrop-blur-md"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed bottom-0 right-0 top-0 z-[201] flex w-full max-w-md flex-col glass-panel border-l border-cream/10"
            dir="rtl"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-between border-b border-cream/10 p-6"
            >
              <h2 className="font-cairo text-2xl font-bold text-cream">سلة الطلب</h2>
              <button
                onClick={closeCart}
                className="rounded-full p-2 text-cream/60 transition-colors hover:bg-cream/10 hover:text-cream"
                aria-label="إغلاق"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <p className="text-center font-alexandria text-cream/50 py-12">
                  السلة فاضية — اختار بيتزاك المفضلة
                </p>
              ) : (
                <ul className="space-y-4">
                  {items.map((item) => (
                    <motion.li
                      key={item.id}
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex gap-4 rounded-2xl bg-cream/5 p-3"
                    >
                      <motion.div
                        layout
                        className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl"
                      >
                        <Image
                          src={item.image}
                          alt={item.nameAr}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </motion.div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <h3 className="font-cairo font-semibold text-cream">
                            {item.nameAr}
                          </h3>
                          <p className="font-cairo text-pizza">
                            {formatPrice(item.price)}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-cream/20 text-cream hover:border-pizza"
                          >
                            −
                          </button>
                          <motion.span
                            key={item.quantity}
                            initial={{ scale: 1.3 }}
                            animate={{ scale: 1 }}
                            className="w-6 text-center font-ibm"
                          >
                            {item.quantity}
                          </motion.span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-cream/20 text-cream hover:border-pizza"
                          >
                            +
                          </button>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="mr-auto text-xs text-cream/40 hover:text-red-400"
                          >
                            حذف
                          </button>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="border-t border-cream/10 p-6"
              >
                <div className="space-y-2 font-alexandria text-sm text-cream/70">
                  <div className="flex justify-between">
                    <span>المجموع الفرعي</span>
                    <motion.span key={subtotal}>{formatPrice(subtotal)}</motion.span>
                  </div>
                  <motion.div className="flex justify-between">
                    <span>رسوم التوصيل</span>
                    <span>{formatPrice(deliveryFee)}</span>
                  </motion.div>
                  <motion.div className="flex justify-between">
                    <span>الضريبة</span>
                    <span>{formatPrice(tax)}</span>
                  </motion.div>
                  <div className="flex justify-between border-t border-cream/10 pt-3 font-cairo text-lg font-bold text-cream">
                    <span>الإجمالي</span>
                    <motion.span
                      key={total}
                      initial={{ scale: 1.1, color: "#ff8c1a" }}
                      animate={{ scale: 1, color: "#ff8c1a" }}
                      className="text-pizza"
                    >
                      {formatPrice(total)}
                    </motion.span>
                  </motion.div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 0 50px rgba(255,140,26,0.5)" }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "mt-6 w-full rounded-full py-4 font-cairo font-bold text-void",
                    "btn-shimmer shadow-glow"
                  )}
                >
                  إتمام الطلب
                </motion.button>
              </motion.div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
