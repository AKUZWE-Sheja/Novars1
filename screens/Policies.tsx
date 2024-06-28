import React, { FC } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import {
  StyledContainer,
  InnerContainer
} from '../components/styles';
import COLORS from 'constants/colors';

interface PoliciesProps {
  navigation: any;
}

const Policies: FC<PoliciesProps> = ({ navigation }): JSX.Element => {

  return (
    <ScrollView>
      <StyledContainer>
        <InnerContainer>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="arrowleft" size={20} color="black" style={styles.backIcon} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Policies</Text>
          </View>

          <View style={styles.contentContainer}>
            <Text style={styles.sectionTitle}>1. Types of Data We Collect</Text>
            <Text style={styles.sectionContent}>
              We collect various types of data to provide and improve our services, including personal information, usage data, and data collected from our farm monitoring, security, and automation systems.
            </Text>
          </View>
          
          <View style={styles.contentContainer}>
            <Text style={styles.sectionTitle}>2. Use of Your Personal Data</Text>
            <Text style={styles.sectionContent}>
              Your personal data is used to enhance the functionality and security of our farm monitoring and automation systems. This includes real-time monitoring, automated control of farm equipment, and ensuring the security of your premises.
            </Text>
          </View>
          
          <View style={styles.contentContainer}>
            <Text style={styles.sectionTitle}>3. Disclosure of Your Personal Data</Text>
            <Text style={styles.sectionContent}>
              We disclose your personal data only in certain circumstances, such as compliance with legal obligations, protection of our rights, and providing our services with third-party integrations. We ensure that your data is always handled securely.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Farm Monitoring</Text>
            <Text style={styles.sectionContent}>
              Our farm monitoring services provide real-time insights into soil conditions, weather patterns, and crop health. This helps farmers make informed decisions to optimize crop yield and reduce waste.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Security</Text>
            <Text style={styles.sectionContent}>
              Our security solutions include surveillance cameras, motion detectors, and automated alerts to ensure the safety of your farm and assets. We provide 24/7 monitoring to give you peace of mind.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Automation</Text>
            <Text style={styles.sectionContent}>
              Our automation services allow you to control irrigation systems, lighting, and other farm equipment remotely. This helps save time, reduces labor costs, and ensures optimal resource utilization.
            </Text>
          </View>
        </InnerContainer>
      </StyledContainer>
    </ScrollView>
  );
};

export default Policies;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '10%',
    marginBottom: '5%',
    paddingBottom: 10,
  },
  backIcon: {
    marginLeft: -110,
    paddingRight: 90,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  contentContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 14,
    lineHeight: 22,
    color: COLORS.textDark,
  },
  section: {
    marginVertical: 15,
  },
});

