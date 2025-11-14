import {
  CurrencyCircleDollarIcon,
  MagnifyingGlassIcon,
  PackageIcon,
  StorefrontIcon,
  TicketIcon
} from "phosphor-react-native";
import React, { useState } from "react";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import BannerCarousel from "@/components/BannerCarousel";
import Header from "@/components/Header";
import HorizontalScrollCategories from "@/components/HorizontalScrollCategories";
import ProductCard from "@/components/ProductCard";
import { bannerImages } from "@/data/bannerImages";
import { products } from "@/data/products";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const [scrolled, setScrolled] = useState(false);

  const categoriesList = [
    { icon: CurrencyCircleDollarIcon, label: "Moedas",     color: "#f59e0b" },
    { icon: TicketIcon,              label: "Cupons",     color: "#ee4c2d" },
    { icon: MagnifyingGlassIcon,     label: "Achadinhos", color: "#2563eb" },
    { icon: PackageIcon,             label: "Frete Grátis\nacima de R$10", color: "#16a34a" },
    { icon: StorefrontIcon,          label: "Lojas",       color: "#dc2626" },
  ];

  return (
    <View style={{ flex: 1, paddingTop: insets.top }}>
      <StatusBar
        translucent
        backgroundColor={scrolled ? "#fff" : "transparent"}
        barStyle={scrolled ? "dark-content" : "light-content"}
      />

      <Header scrolled={scrolled} />

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        onScroll={(e) => setScrolled(e.nativeEvent.contentOffset.y > 1)}
      >
        <BannerCarousel images={bannerImages} />

        <HorizontalScrollCategories categories={categoriesList} />


        <View style={styles.productsGrid}>
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  productsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 16,
    gap: 12,
    paddingBottom: 80,
  },
});
